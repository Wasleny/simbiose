class UseRedirectView {
  to (path) {
    window.location.href = `${process.env.MIX_APP_URL}/${path}`;
  }
}

export default new UseRedirectView;
