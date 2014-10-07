{
    "collection": {
        "version": 1.0,
        "href": "thisURI",
        "links": [],
        "items": [
            {
                "href" : URI,
                "data" : [
                    {"prompt" : STRING, "name" : STRING, "value" : VALUE},
                    {"prompt" : STRING, "name" : STRING, "value" : VALUE},
                    {"prompt" : STRING, "name" : STRING, "value" : VALUE}
                ],
                "links" : [
                    {"href" : URI, "rel" : STRING, "prompt" : STRING, "name" : STRING, "render" : "image"},
                    {"href" : URI, "rel" : STRING, "prompt" : STRING, "name" : STRING, "render" : "link"},
                    {"href" : URI, "rel" : STRING, "prompt" : STRING, "name" : STRING}
                ]
            },
            {
                "href" : URI,
                "data" : [
                    {"prompt" : STRING, "name" : STRING, "value" : VALUE},
                    {"prompt" : STRING, "name" : STRING, "value" : VALUE},
                    {"prompt" : STRING, "name" : STRING, "value" : VALUE}
                ],
                "links" : []
            }
        ]
    },

    "error": {
        "title" : "TRING",
        "code" : "TRING",
        "message" : "TRIN"
    },

    "template": {
        "data" : [
            {"prompt" : STRING, "name" : STRING, "value" : VALUE},
            {"prompt" : STRING, "name" : STRING, "value" : VALUE},
            {"prompt" : STRING, "name" : STRING, "value" : VALUE}
        ]
    },

    "queries" : [
        {"href" : URI, "rel" : STRING, "prompt" : STRING, "name" : STRING},
        {"href" : URI, "rel" : STRING, "prompt" : STRING, "name" : STRING,
         "data": [
            {"name" : STRING, "value" : VALUE}
         ]
        },
        {"href" : URI, "rel" : STRING, "prompt" : STRING, "name" : STRING}
    ]
}
