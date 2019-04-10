# Angular example by Odds

Use this as an example and training Angular.

## TODO

## Communicating between components

### Component to component
- [ ] Simple properties

### Parent to Child
- [x] Sharing Data via Input
น่าจะเป็นวิธีที่นิยมสูงสุด โดยใช้งาน @Input ก็ดูอธิบายง่ายดี เช่น Commponent นี้รับ input อะไรบ้าง


### Single Source of Truth by Behavior Subject
- [x] Sharing Data via Behavior Subject
เป็นวิธีการย้ายที่เก็บ ข้อมูลจาก Parent Component ไปไว้ที่ Service Class แล้วอาศัยการ Injection ตัว Service นี้เข้าไปยัง Component ทุกๆ Component ที่ต้องการข้อมูล
เช่น เมื่อมีการแก้ไขข้อมูลที่ Service ทุก ๆ Component ที่ subscribe จะได้ค่าที่เปลี่ยนไปด้วย

