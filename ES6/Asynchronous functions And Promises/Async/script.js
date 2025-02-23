getUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We got the data");
      resolve({ userEmail: email, userPassword: password });
    }, 3000);
  });
};

getUserPhotos = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ picture: user.userEmail, pictureID: user.userPassword });
    }, 2000);
  });
};

getUserLikes = (picture) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5][picture.pictureID]);
    }, 1000);
  });
};

// getUser("hirani@gamfoja.com", 2).then((user) => {
//   getUserPhotos(user).then((picture) => {
//     getUserLikes(picture).then((details) => {
//       console.log(details);
//     });
//   });
// });

async function getDetails() {
  const userLogged = await getUser("hirani@fjskjfs.com", 0);
  const userPhotos = await getUserPhotos(userLogged);
  const userLikes = await getUserLikes(userPhotos);
  console.log(userLikes);
}
getDetails();
