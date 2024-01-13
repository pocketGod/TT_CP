using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TT_CP.API.Entites.General;

public class Item
{
    [BsonId]
    public ObjectId Id { get; set; }

    [BsonElement("title")]
    public NestedLang Title { get; set; }

    [BsonElement("subTitle")]
    public NestedLang SubTitle { get; set; }

    [BsonElement("year")]
    public int Year { get; set; }

    [BsonElement("description")]
    public NestedLang Description { get; set; }

    [BsonElement("images")]
    public List<string> Images { get; set; }

    [BsonElement("video")]
    public string Video { get; set; }

    [BsonElement("cover")]
    public string Cover { get; set; }

    [BsonElement("isActive")]
    public bool IsActive { get; set; }
}


