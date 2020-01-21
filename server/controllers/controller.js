module.exports = {
  getSubs: async (req, res) => {
    const db = req.app.get('db');
    const subreads = await db.subreads.subreads();
    console.log(subreads);
    res.send(subreads);
  },
  getPosts: async (req, res) => {
    console.log('hello there');
    const db = req.app.get('db');
    const posts = await db.subreads.allSubPosts();
    console.log(posts);
    res.send(posts);
  }
};
