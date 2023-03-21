migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zeh3sj03xgb5ws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4pmsqrzx",
    "name": "book_image_url",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zeh3sj03xgb5ws")

  // remove
  collection.schema.removeField("4pmsqrzx")

  return dao.saveCollection(collection)
})
