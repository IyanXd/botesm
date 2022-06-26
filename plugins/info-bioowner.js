let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : IyanXd
*✉️ Nama RL* : Gian
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 25 Januari 2007
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot, Nonton okep:v
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Jatim, Pasuruan, Bangil
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @iyan_xd
*🇫  Facebook* : Iyan Iyan
*🏮 WhatsApp* : wa.me/62895323413434
*🐈 Github:* IyanXd

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 Chats", null,null, [["Donasi", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler