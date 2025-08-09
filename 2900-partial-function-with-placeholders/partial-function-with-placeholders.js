/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function (fn, args) {
  return function (...restArgs) {
    let restIndex = 0;
    let finalArgs = [];

    // Fill placeholders from restArgs
    for (let i = 0; i < args.length; i++) {
      if (args[i] === "_" && restIndex < restArgs.length) {
        finalArgs.push(restArgs[restIndex]);
        restIndex++;
      } else {
        finalArgs.push(args[i]);
      }
    }

    // Add any leftover restArgs
    while (restIndex < restArgs.length) {
      finalArgs.push(restArgs[restIndex]);
      restIndex++;
    }

    // Call the original function with the combined arguments
    return fn.apply(this, finalArgs);
  };
};