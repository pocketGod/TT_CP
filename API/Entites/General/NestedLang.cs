using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TT_CP.API.Entites.General
{
    public class NestedLang
    {
        [BsonElement("he")]
        public string Hebrew { get; set; }

        [BsonElement("en")]
        public string English { get; set; }
    }

    public class TranslationDictionaryItem
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("key")]
        public string Key { get; set; }

        [BsonElement("value")]
        public NestedLang Value { get; set; }
    }
}
