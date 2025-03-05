const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Cấu hình Multer để xử lý tải file lên
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Thư mục chứa file tải lên
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file duy nhất
  }
});

const upload = multer({ storage: storage });

// Tạo thư mục 'uploads' nếu chưa có
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Route mặc định để tránh lỗi "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Server is running! Use /upload, /files, or /download/:filename');
});

// API để tải file lên
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  res.json({
    message: 'File uploaded successfully!',
    file: req.file.filename
  });
});

// API lấy danh sách file trong thư mục 'uploads'
app.get('/files', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to list files.' });
    }
    res.json(files);
  });
});

// API tải file về
app.get('/download/:filename', (req, res) => {
  const fileName = path.basename(req.params.filename); // Chặn truy cập ra ngoài thư mục
  const filePath = path.join(__dirname, 'uploads', fileName);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

// API tạo thư mục mới trong 'uploads'
app.post('/create-folder', (req, res) => {
  const folderName = req.body.folderName;
  if (!folderName) {
    return res.status(400).json({ error: 'Folder name is required' });
  }
  const folderPath = path.join('uploads', folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    return res.json({ message: `Folder ${folderName} created successfully` });
  } else {
    return res.status(400).json({ error: 'Folder already exists' });
  }
});

// Cho phép truy cập file tĩnh trong 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
