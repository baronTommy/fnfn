module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: ":feat:", release: "major" },
          { type: ":perf:", release: "minor" },
          { type: ":fix:", release: "patch" },
          { type: ":refactor:", release: "patch" },
          
          // { type: "build", "release": false },
          // { type: "ci", "release": false },
          // { type: "docs", "release": false },
          // { type: "test", "release": false },
        ],
      },
    ],
  ],
};
