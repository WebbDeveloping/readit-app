module.exports = {
  getSubs: async (req, res) => {
    const db = req.app.get('db');
    const subreads = await db.subreads.subreads();
    res.send(subreads);
  },
  getPosts: async (req, res) => {
    const db = req.app.get('db');
    const posts = await db.subreads.allSubPosts();
    res.send(posts);
  },
  getSinglePost: async (req, res) => {
    // console.log('hello world');
    try {
      const { id } = req.params;
      const db = req.app.get('db');
      const post = await db.posts.getSinglePost(id);
      // console.log(post);
      res.send(post);
    } catch (err) {
      console.log(err);
    }
  },
  getSubread: async (req, res) => {
    try {
      const { id } = req.params;
      const db = req.app.get('db');
      const sub = await db.subreads.SubById(id);
      console.log('server', sub);
      res.send(sub);
    } catch (error) {
      console.log(error);
    }
  },
  postPost: async (req, res) => {
    console.log('post posst', req.body);
    const { image, title, post_description, url, subread_id } = req.body;
    try {
      const db = req.app.get('db');
      const post = await db.posts.createPost([
        image,
        title,
        post_description,
        url,
        subread_id
      ]);
      console.log(666, post);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
};
