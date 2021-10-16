module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          // major
          { type: "feat", release: "major" },

          // minor
          { type: "customValue1", release: "minor" },

          // patch
          { type: "perf", release: "patch" },
          { type: "fix", release: "patch" },
          { type: "refactor", release: "patch" },


          // { type: "build", "release": false },
          // { type: "ci", "release": false },
          // { type: "docs", "release": false },
          // { type: "test", "release": false },
        ],
      },
    ],
  ],
};
