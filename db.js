const sqlite3 = require('sqlite3').verbose();

const dbname = 'input.sqlite';
// 创建并连接一个数据库
const db = new sqlite3.Database(dbname)

// 创建一个articles表
db.serialize(() => {
    const sql = `
        CREATE TABLE IF NOT EXISTS atable
        (id integer primary key,create_date TEXT)
    `;
    // 如果没有articles表,创建一个
    db.run(sql);
});

// Articles API
class Atable {
    // 获取所有文章
    static all(cb) {
    	// 使用sqlite3的all
        db.all('SELECT * FROM atable', cb);
    }
    // 根据id 获取文章
    static find(id, cb) {
    	// 使用sqlite3的get
        db.get('SELECT * FROM atable WHERE id = ?', id,cb);
    }
    // 添加一个条文章记录
    static create(data, cb) {
        const sql = `
                INSERT INTO 
                atable(create_date) 
                VALUES(?) 
                `;
        db.run(sql, data, cb);
    }
}
module.exports.Atable = Atable;
