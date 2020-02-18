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
    try {
      const { id } = req.params;
      const db = req.app.get('db');
      const posts = await db.posts.subPosts(id);
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
    const { title, description, subid } = req.body;
    image = 'no-image-yet.png';
    url = 'temporaryUrlsComingsoon.com';
    try {
      const db = req.app.get('db');
      console.log(req.body);
      const post = await db.posts.createPost([
        image,
        title,
        description,
        url,
        subid
      ]);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: (req, res) => {
    const { id } = req.params;
    try {
      const db = req.app.get('db');
      console.log(id);
      const deleted = db.posts.deletePost(id);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
};
