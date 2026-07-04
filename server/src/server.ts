import app from './app';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Server started on port ${PORT}`);
});

server.on('error', (error) => {
  console.error('Server failed to start:', error);
});