module.exports = {
  getSubs: async (req, res) => {
    const db = req.app.get('db');
    const subreads = await db.subreads.subreads();
    console.log(subreads);
    res.send(subreads);
  },
  getPosts: async (req, res) => {
    const db = req.app.get('db');
    const posts = await db.subreads.allSubPosts();
    console.log('ppp', posts);
    res.send(posts);
  }
};
