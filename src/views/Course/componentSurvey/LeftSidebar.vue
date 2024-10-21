<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/image/logo_1.jpg" alt="CLS Logo" />
    </div>
    <div class="menu">
      <div class="menu-header">
        <img src="@/assets/image/study.svg" alt="Study" class="header-icon" />
        <span>
          <i class="fas fa-graduation-cap"></i> Chương trình đào tạo của tôi
        </span>
        <img src="@/assets/image/Actions (1).svg" alt="Actions" class="header-icon1" />
      </div>
      <ul class="menu-items">
        <li>
          <span class="bullet">•</span><i class="fas fa-circle"></i> Nội dung
          đang học
        </li>
        <li>
          <span class="bullet">•</span><i class="fas fa-circle"></i> Khóa học
          của tôi
        </li>
        <li>
          <span class="bullet">•</span><i class="fas fa-circle"></i> Kỳ thi của
          tôi
        </li>
        <li>
          <span class="bullet">•</span><i class="fas fa-circle"></i> Lộ trình
          đào tạo
        </li>
        <li class="active">
          <span class="bullet">•</span><i class="fas fa-circle"></i> Khảo sát
          của tôi
        </li>
      </ul>
    </div>
    <div class="application-menu">
      <div class="left-content">
        <img src="@/assets/image/grid.svg" alt="Grid" class="header-icon" />
        <span><i class="fas fa-th"></i> Ứng dụng</span>
      </div>
      <img src="@/assets/image/Actions.svg" alt="Actions" class="header-icon1" />
    </div>
    <div class="illustration">
      <img src="@/assets/image/IMG.svg" alt="Education Illustration" />
    </div>
  </div>
</template>
  <script>
  export default {
    name: "LeftSidebar",
  };
  </script>
  
  <style scoped>
  .sidebar {
  width: 100%;
  height: 100%; /* Fill the entire height of its container */
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Add scrollbar if content exceeds height */
}

  
  .logo {
    display: flex;
    justify-content: center;
  }
  
  .logo img {
    width: 200px;
    margin-bottom: 40px;
  }
  
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 15px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
  }
  
  .menu-header i.fa-graduation-cap {
    color: #007bff;
    margin-right: 10px;
  }
  
  .menu-items {
    list-style-type: none;
    padding-left: 10px;
  }
  
  .menu-items li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    color: #666;
  }
  
  .menu-items li .bullet {
    margin-right: 5px;
    font-size: 18px;
    color: #666;
  }
  
  .menu-items li i {
    margin-right: 10px;
    font-size: 6px;
    color: #666;
  }
  
  .menu-items li.active,
  .menu-items li.active .bullet,
  .menu-items li.active i {
    color: #175cd3;
  }
  
  .application-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
  }
  
  .application-menu .left-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .application-menu i.fa-th {
    color: #ff6600;
    margin-right: 10px;
  }
  
  .menu-header span,
  .application-menu span {
    font-size: 16px;
    font-weight: bold;
  }
  
  .header-icon {
    width: 40px;
    height: 40px;
  }
  
  .header-icon1 {
    width: 24px;
    height: 24px;
  }
  

  
  .illustration img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  .menu-header,
  .application-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  
  .menu-header .header-icon:last-child,
  .application-menu .header-icon1 {
    margin-left: auto;
  }
  .menu {
  
  overflow-y: auto;
}

.illustration {
  margin-top: auto;
  padding-top: 20px;
  flex-shrink: 0;
}
  </style>