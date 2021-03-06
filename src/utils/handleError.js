

const handleError = (err) => {
  if (err && err.response) {
    if (err.response.status === 500 || err.response.status === 502) {
      alert("It's not you, it's us. Please try again after some time");
    } else if (err.response.status === 304) {
      alert("Sorry, you can only reset your passcode once.");
    } else {
      const error =
        err.response.data?.error ||
        err.response.data?.message ||
        err.response.data?.err ||
        (err.response.data?.data && err.response.data.data?.responseMessage);

      alert(error);
    }
  } else if (err.message === "Network Error") {
    alert("It's not you, it's us. Please try again after some time");
  }
};

export default handleError;
