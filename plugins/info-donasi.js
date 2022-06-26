import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT ↓*
_*Pulsa/pulse(Threee/Indosat):*_ 0895323413434/0 85806151497
_*Dana/Gopay/Qris:*_ Minta Ke Owner
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/IyanXd', 'Github', null, null, [
['Menu', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
