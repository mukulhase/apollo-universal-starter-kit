export default (SECRET, User, jwt) => async (req, res) => {
  try {
    const { user: { id } } = jwt.verify(req.params.token, SECRET);

    await User.updateActive(id, true);
  } catch (e) {
    res.send('error');
  }

  return res.redirect('/login');
};
