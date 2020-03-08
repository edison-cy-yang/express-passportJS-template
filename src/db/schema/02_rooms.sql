-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS rooms CASCADE;
CREATE TABLE rooms (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  video_url TEXT NOT NULL,
  room_owner INTEGER REFERENCES users(id) ON DELETE CASCADE
);
