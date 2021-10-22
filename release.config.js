module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // https://github.com/arvinxx/gitmoji-commit-workflow
        // parserOpts: {
        //   headerPattern:
        //     /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
        //   headerCorrespondence: ["type", "scope", "subject", "ticket"],
        //   noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        // },
        releaseRules: [
          // {
          //   breaking: true,
          //   release: "major",
          // },
          { type: "Breaking", release: "major" },
          { type: "New", release: "minor" },
          { type: "Fix", release: "patch" },
          { type: "Update", release: "patch" },
          // {
          //   release: "patch",
          // },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventional-changelog-conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "Update",
              section: ":sparkles: Novidades",
              hidden: false,
            },
            {
              type: "New",
              section: ":sparkles: Novidades",
              hidden: false,
            },
            {
              type: "Fix",
              section: ":bug: Correções",
              hidden: false,
            },
          ],
        },
      },
    ],
    "@semantic-release/github",
  ],
};

// https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser#conventionalcommitsparseroptions
// https://github.com/semantic-release/release-notes-generator/issues/153#issuecomment-555152563
// https://github.com/semantic-release/release-notes-generator/issues/165
