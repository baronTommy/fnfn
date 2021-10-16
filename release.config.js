module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          // major
          { type: ":sparkles:", release: "major" },
          
          // minor
          { type: ":ambulance::", release: "minor" },

          // patch
          { type: ":lipstick:", release: "patch" },
        ],
      },
    ],
  ],
};

