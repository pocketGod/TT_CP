using MongoDB.Bson.Serialization;
using TT_CP.API.Entites.General;

namespace TT_CP.API.Bootstrap.DB
{
    public class DatabaseModelsBsonMapper
    {
        public static void Initialize()
        {

      
            BsonClassMap.RegisterClassMap<Item>(cm =>
            {
                cm.AutoMap();
                cm.SetIsRootClass(true);
            });

            BsonClassMap.RegisterClassMap<NestedLang>(cm =>
            {
                cm.AutoMap();
                cm.SetIgnoreExtraElements(true);
            });


        }
    }
}
