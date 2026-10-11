# 温哥华生活课本

给爸妈准备的生活英语课本。他们六十岁左右，准备搬来温哥华生活：写下来的英语大多能看懂，可真人一开口就跟不上。所以这里不背单词、不打卡，只按生活场景一课一课地听。每句话都有 AI 朗读、跟着声音走的高亮光标、中文意思，还有“听起来像”的连读提示和本地小贴士。

网站同时部署在 Vercel 和 GitHub Pages（https://ivoryzh.github.io/vancouver-life-textbook/ ，国内一般能打开），push 到 `main` 两边都会自动更新。

## 内容

- 8 章 24 课 228 句：邻居和电梯、听不懂时怎么办、加拿大式闲聊、超市（含周末市集）、咖啡店和餐厅、坐车和问路、药店和看病、进阶听力（UBC 校园里的本地人聊天）
- 对话句子用预先生成的 AI 语音；「你可以回答」和「生词」按钮用设备自带的声音
- 可调字号和语速（慢 / 中 / 原速），可以连续播放、只听不看
- 学习进度保存在各自手机的浏览器里

## 文件

| 路径 | 作用 |
| --- | --- |
| `index.html` | 页面，样式和逻辑都在里面 |
| `lessons.js` | 全部课程内容，顶部有字段说明 |
| `audio/` | 生成好的 mp3，和对照表 `manifest.js` |
| `tools/make_audio.py` | 生成语音 |
| `tools/check_audio.py` | 用语音识别检查生成的语音 |
| `tools/build.mjs` | 打包成完整网页到 `dist/`，Vercel 和 GitHub Pages 部署时自动运行 |

## 加一课

1. 在 `lessons.js` 里照格式加一段。可以让 Claude 起草，提示词模板在 [NOTES.md](NOTES.md#让-claude-起草新课)。
2. 自己读一遍，把不对的、超纲的地方改掉。
3. 生成语音：`python tools/make_audio.py --prune`
4. 检查语音：`python tools/check_audio.py`
5. 本地预览，看一眼效果（见下）。
6. commit 并 push，Vercel 和 GitHub Pages 会自动更新。

第一次运行需要先装：`pip install edge-tts faster-whisper`，另外要有 Node.js。

## 本地预览

```bash
node tools/build.mjs
python -m http.server 8000 --directory dist
```

然后打开 http://localhost:8000

## 更多

这个页面是怎么做的、踩过哪些坑、以后怎么扩展，都记在 [NOTES.md](NOTES.md)。
