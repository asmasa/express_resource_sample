exports.convertBody = function(models) {
    var body = [], i, obj, elm, attrs;

    for(i = 0; i < models.length; i++) {
        elm = {};

        obj = models[i].toObject();

        elm.id = obj._id;

        //console.log(obj);

        attrs = obj['0'];
    //console.log(attrs);
        for(var attr in attrs) {
            elm[attr] = attrs[attr];
        }

        body[i] = elm;
    }

    return body;
};
