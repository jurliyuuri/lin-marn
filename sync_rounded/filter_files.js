const fs = require("fs");

const existence_list = [];
const non_existence_list = [];

fs.readdir("all_glyphs", (err, files) => {
    files.forEach(file => {
        if (file.match(/^(?!々)\p{Script=Han}\.svg$/u)) {
            const content = fs.readFileSync(`all_glyphs/${file}`, { encoding: "utf-8" });
            if (content.includes("251.40343,94.633744 14.428583,171.12929")) {
                console.log(`${file} はダミーなのでコピーしません`);
                non_existence_list.push([...file][0]);
            } else {
                fs.copyFileSync(`all_glyphs/${file}`, `../骨軸倉字/${file}`);
                console.log(`${file} を「骨軸倉字」フォルダにコピーしています`);
                existence_list.push([...file][0]);
            }
        }
    });

    console.log({
        existence_list: existence_list.join(""),
        existence_list_len: existence_list.length,
        non_existence_list: non_existence_list.join(""),
        non_existence_list_len: non_existence_list.length
    });

    console.log("image_existence_table.ts のソースコード自体を書き換える evil なコードを実行します");
    const source_file = fs.readFileSync("../image_table_ts/image_existence_table.ts", { encoding: "utf-8" });
    fs.writeFileSync("../image_table_ts/image_existence_table.ts", source_file.replace(/\/\*\* THE FOLLOWING CONTENT IS TO BE REPLACED BY THE SCRIPT LOCATED IN `sync_rounded\/`.+/, `/** THE FOLLOWING CONTENT IS TO BE REPLACED BY THE SCRIPT LOCATED IN \`sync_rounded/\` */ ${JSON.stringify(existence_list)}`))
});
