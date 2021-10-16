
module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "build", release: "patch" },
          { type: "ci", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "feat", release: "patch" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "test", release: "patch" },

          // ----
          { type: "customValue1", release: "minor" },
          // ----
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        // preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "fix",
              section: ":bug: bug bugbug...",
              hidden: false,
            },
          ],
        },
      },
    ],
    "@semantic-release/github",
  ],
};