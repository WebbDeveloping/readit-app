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
    try {
      const { id } = req.params;
      const db = req.app.get('db');
      const post = await db.posts.getSinglePost(id);
      res.send(post);
    } catch (err) {
      console.log(err);
    }
  },
  getPostsForSub: async (req, res) => {
    console.log('made it');
    try {
      const { id } = req.params;
      const db = req.app.get('db');
      const posts = await db.posts.subPosts(id);
      console.log(posts);
      res.send(posts);
    } catch (err) {
      console.log(err);
    }
  },
  getSubread: async (req, res) => {
    try {
      const { id } = req.params;
      const db = req.app.get('db');
      const sub = await db.subreads.SubById(id);
      res.send(sub);
    } catch (error) {
      console.log(error);
    }
  },
  postPost: async (req, res) => {
    const { image, title, post_description, url, id } = req.body;
    try {
      const db = req.app.get('db');
      const post = await db.posts.createPost([
        image,
        title,
        post_description,
        url,
        id
      ]);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
};
