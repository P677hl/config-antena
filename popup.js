Swal.fire({
  title: 'Sekedar Info',
  text: 'Kalau versinya tidak sama silahkan epepnya di update dulu ya gan 🙂',
  imageUrl: 'https://i.ibb.co/F8r4v8c/20211109-155416.jpg',
  imageWidth: 400,
  imageAlt: 'Update freefire',
  showDenyButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Update!',
  confirmButtonAriaLabel: 'Thumbs up',
  denyButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  denyButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: 'Update',
      html: '<a href="https://play.google.com/store/apps/details?id=com.dts.freefiremax" style="text-decoration: none; color: #09ceff;"><b>FreeFireMAX</b></a> or <a href="https://play.google.com/store/apps/details?id=com.dts.freefireth" style="text-decoration: none; color: #09ceff;"><b>FreeFire</b></a>',
      icon: 'question',
      showConfirmButton: false,
      showCloseButton: true
    })
  } else if (result.isDenied) {
    Swal.fire({
      title: 'Sekedar Info', 
      text: 'Kalau tidak di update file epepnya bisa ngebug', 
      icon: 'info',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="" style="text-decoration: none; color: #fff;">Batal</a>',
      confirmButtonAriaLabel: 'batal',
      cancelButtonText:
        'Ya',
      cancelButtonAriaLabel: 'ya'
    })
  }
})
document.getElementById("dwn1").addEventListener("click", function(){
  //Swal.fire("Information", "Sedang mengupdate versi, mohon tunggu", "info");
  //Swal.fire("Pending", "terjadi kesalahan saat mengupdate config, mungkin perlu waktu", "warning");
});
document.getElementById("dwn2").addEventListener("click", function(){
  //Swal.fire("Information", "Sedang mengupdate versi, mohon tunggu", "info");
  Swal.fire("Canceled", "terjadi kesalahan saat mengupdate config, mungkin perlu waktu", "error");
});