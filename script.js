document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('edit');
    const profileForm = document.getElementById('sectionform');
    
    editButton.addEventListener('click', () => {
        document.getElementById('nama2').value = document.getElementById('nama1').textContent;
        document.getElementById('role2').value = document.getElementById('role1').textContent;
        document.getElementById('availability2').value = document.getElementById('availability1').textContent;
        document.getElementById('usia2').value = document.getElementById('usia1').textContent;
        document.getElementById('lokasi2').value = document.getElementById('lokasi1').textContent;
        document.getElementById('YOE').value = document.getElementById('pengalaman').textContent;
        document.getElementById('email2').value = document.getElementById('email1').textContent;
    });
  
    profileForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
  
      document.getElementById('nama1').textContent = document.getElementById('nama2').value;
      document.getElementById('role1').textContent = document.getElementById('role2').value;
      document.getElementById('availability1').textContent = document.getElementById('availability2').value;
      document.getElementById('usia1').textContent = document.getElementById('usia2').value;
      document.getElementById('lokasi1').textContent = document.getElementById('lokasi2').value;
      document.getElementById('pengalaman').textContent = document.getElementById('YOE').value;
      document.getElementById('email1').textContent = document.getElementById('email2').value;
  
      alert("Data berhasil diperbarui!");
    });
  });
  