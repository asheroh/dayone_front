migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zeh3sj03xgb5ws")

  // remove
  collection.schema.removeField("fzoovaoz")

  // remove
  collection.schema.removeField("2vzyuqma")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6issmfx8",
    "name": "passage",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i43uq1bh",
    "name": "comment",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4cdad2hs",
    "name": "sympathy_count",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzoovaoz",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vzyuqma",
    "name": "create_at",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("6issmfx8")

  // remove
  collection.schema.removeField("i43uq1bh")

  // remove
  collection.schema.removeField("4cdad2hs")

  return dao.saveCollection(collection)
})
