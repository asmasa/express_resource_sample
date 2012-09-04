exports.create = function(args, id) {
    console.log(args);
    console.log(args.host);
    var base = args.protcol + '://' + args.host + args.path;
    var uri = base + '/' + id;
    return uri;
};
