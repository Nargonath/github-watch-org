'use strict';

exports.endNixtCalls = function (nixtInstance) {
  return new Promise((resolve, reject) => {
    const done = (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    };

    nixtInstance.end(done);
  });
};
