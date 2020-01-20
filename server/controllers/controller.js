module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db');
    const subreads = await db.subreads.subreads();
    console.log(subreads);
    res.send(subreads);
  }
};
