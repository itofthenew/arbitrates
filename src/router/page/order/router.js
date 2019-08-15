let baseURL = '';
if (process.env.NODE_ENV === 'production') {
  baseURL = '/h5-web'
}

const router = [
  {
    name: 'CustomerInsideDetail222222222',
    url: baseURL + '/page/customerSideDetail/index.html',
  }
];

export default router;
