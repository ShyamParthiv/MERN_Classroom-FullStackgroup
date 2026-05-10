const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "a8f3d92c1e7b604f5a291d83c6e0b74f2d5c8a1e9f3b6d02c7a4e8f1b5d3c9a2",
  mongoUri: process.env.MONGODB_URI || "mongodb://e0323006:rinzler21@ac-byzf2km-shard-00-00.pq1ixrr.mongodb.net:27017,ac-byzf2km-shard-00-01.pq1ixrr.mongodb.net:27017,ac-byzf2km-shard-00-02.pq1ixrr.mongodb.net:27017/mernproject?ssl=true&authSource=admin&retryWrites=true&w=majority"
}

export default config
