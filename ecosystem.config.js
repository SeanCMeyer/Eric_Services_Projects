module.exports = {
  apps: [
    {
      name: "JumpStart",
      script: "./SEAN-SERVER/server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-54-204-215-131.compute-1.amazonaws.com",
      key: "~/.ssh/JumpStream.pem",
      ref: "origin/master",
      repo: "https://github.com/SeanCMeyer/Eric_Services_Projects.git",
      path: "/home/ubuntu/",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
