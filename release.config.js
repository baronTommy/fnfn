module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {

        "parserOpts": {
          "headerPattern": "^:(\\w+): \\s(.*)$",
          "headerCorrespondence": [ "type", "subject" ],
        },

        "releaseRules": [
          {
            "breaking": true,
            "release": "major",
          },
        ]

        // releaseRules: [
        //   // major
        //   { type: "feat", release: "major" },

        //   // minor
        //   { type: "customValue1", release: "minor" },

        //   // patch
        //   { type: "perf", release: "patch" },
        //   { type: "fix", release: "patch" },
        //   { type: "refactor", release: "patch" },
        // ],
      },
    ],
  ],
};
