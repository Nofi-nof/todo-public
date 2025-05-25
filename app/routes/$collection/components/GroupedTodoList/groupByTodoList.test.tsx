import { GroupedTodoList } from ".";
import { groupByTodoList } from "./groupByTodoList";

describe("groupByTodoList", () => {
  it("グループがスーパー、ドラックストア、その他、急ぎでないものの順番に並んでいること", async () => {
    const expected = [
      [
        "",
        [
          {
            id: "dL6PAKAdeySHYpFn3VkW",
            todo: "ふきん",
            isChecked: false,
            date: {
              seconds: 1737365254,
              nanoseconds: 776000000,
            },
            group: "",
          },
        ],
      ],
      [
        "スーパー",
        [
          {
            id: "dL6PAKAdeySHYpFnyVkW",
            todo: "塩昆布",
            isChecked: false,
            date: {
              seconds: 1737365254,
              nanoseconds: 776000000,
            },
            group: "スーパー",
          },
        ],
      ],
      [
        "ドラッグストア",
        [
          {
            id: "JccuFuZOuEdtZ03IoMLT",
            todo: "クイックルワイパー",
            isChecked: false,
            date: {
              seconds: 1736823077,
              nanoseconds: 976000000,
            },
            group: "ドラッグストア",
          },
        ],
      ],
      [
        "その他",
        [
          {
            id: "61pnZz4zx7orsu4FadQZ",
            todo: "お菓子",
            isChecked: false,
            date: {
              seconds: 1719901364,
              nanoseconds: 219000000,
            },
            group: "その他",
          },
        ],
      ],
      [
        "急ぎでないもの",
        [
          {
            id: "61pnZz4zx7orsu5FbdQZ",
            todo: "麦茶入れ",
            isChecked: false,
            date: {
              seconds: 1719901364,
              nanoseconds: 219000000,
            },
            group: "急ぎでないもの",
          },
        ],
      ],
    ];

    const actual = groupByTodoList([
      {
        id: "dL6PAKAdeySHYpFnyVkW",
        todo: "塩昆布",
        isChecked: false,
        date: {
          seconds: 1737365254,
          nanoseconds: 776000000,
        },
        group: "スーパー",
      },
      {
        id: "JccuFuZOuEdtZ03IoMLT",
        todo: "クイックルワイパー",
        isChecked: false,
        date: {
          seconds: 1736823077,
          nanoseconds: 976000000,
        },
        group: "ドラッグストア",
      },
      {
        id: "dL6PAKAdeySHYpFn3VkW",
        todo: "ふきん",
        isChecked: false,
        date: {
          seconds: 1737365254,
          nanoseconds: 776000000,
        },
        group: "",
      },
      {
        id: "61pnZz4zx7orsu4FadQZ",
        todo: "お菓子",
        isChecked: false,
        date: {
          seconds: 1719901364,
          nanoseconds: 219000000,
        },
        group: "その他",
      },
      {
        id: "61pnZz4zx7orsu5FbdQZ",
        todo: "麦茶入れ",
        isChecked: false,
        date: {
          seconds: 1719901364,
          nanoseconds: 219000000,
        },
        group: "急ぎでないもの",
      },
    ]);

    expect(actual).toStrictEqual(expected);
  });
});
