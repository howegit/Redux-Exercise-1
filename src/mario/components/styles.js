const styles = {
  container: {
    fontFamily: 'vt323',
    backgroundColor: '#5c94fc',
    height: 300,
    fontSize: 30,
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 10,
    marginBottom: 10,
    position: 'relative',
  },
  header: {
    position: 'relative',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 10,
  },
  mario: {
    background:
      "url('http://fotos.subefotos.com/0b84cd405ce010e3e156188bfc49ce8ao.png')no-repeat 0 -963px",
    height: 95,
    width: 95,
    position: 'absolute',
    top: 150,
  },
  block: {
    background:
      "url('http://fotos.subefotos.com/0b84cd405ce010e3e156188bfc49ce8ao.png')repeat-x 0 -907px",
    height: 56,
    width: '100%',
    position: 'absolute',
    top: 245,
  },
  coin: {
    background:
      "url('http://fotos.subefotos.com/0b84cd405ce010e3e156188bfc49ce8ao.png')no-repeat 0 -190px",
    height: 42,
    width: 37,
    position: 'absolute',
    top: 43,
    left: -41,
    backgroundSize: 140,
  },
};

export default styles;
