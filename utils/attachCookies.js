const attachCookies = ({ res, token }) => {
  const oneDay = 24 * 60 * 60 * 1000;
  res.cookie("token", token, {
    expires: new Date(Date.now() + oneDay),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};

export default attachCookies;
