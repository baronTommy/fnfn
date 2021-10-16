module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // "parserOpts": {
        //   "headerPattern": "^:(\\w+): \\s(.*)$",
        //   "headerCorrespondence": [ "type", "subject" ],
        // },
        parserOpts: {
          headerPattern:
            /^(?:(?:\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]) (\w*))(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/,
            "headerCorrespondence": [ "type", "subject" ],
        },
        releaseRules: [
          {
            type: "art",
            release: "major",
          },
          {
            type: ":art:",
            release: "patch",
          },
        ],

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
