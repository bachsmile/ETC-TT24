Updated UserMenu Component

<template>
  <div class="head-user-menu">
    <div class="icon flag-icon">
      <img src="@/assets/image/Vietnam.svg" alt="Vietnam flag" />
    </div>
    <div class="icon flag-icon">
      <img src="@/assets/image/person.svg" alt="user-icon" />
    </div>
    <div class="icon flag-icon">
      <img src="@/assets/image/_Nav_item_button.svg" alt="message-icon" />
    </div>
    <div class="icon flag-icon">
      <img src="@/assets/image/_Nav_item_button1.svg" alt="alert-icon" />
    </div>
    <div class="profile-dropdown">
      <div class="profile" @click="toggleDropdown">
        <img
          src="@/assets/image/acc.jpg"
          alt="Profile picture"
          class="profile-pic"
        />
        <span class="status-indicator"></span>
      </div>
      <div v-if="isOpen" class="dropdown-content">
        <a href="#" @click.prevent="goToProfile">Tạo bài khảo sát</a>
        <a href="#" @click.prevent="logout">Đăng xuất</a>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'UserMenu',
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  },
  goToProfile() {
    const token = localStorage.getItem("token"); // Check for  authentication status
    if (token) {
      this.$router.push("/profile"); 
    } else {
      this.$router.push("/login"); 
    }
  },
  logout() {
    console.log('Logging out...');
    this.$emit('logout'); 
  },
  closeDropdown(event) {
    if (!this.$el.contains(event.target)) {
      this.isOpen = false;
    }
  },
},
    mounted() {
      document.addEventListener('click', this.closeDropdown);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.closeDropdown);
    },
  };
  </script>
  
  <style scoped>
.head-user-menu {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
  .icon {
    margin-right: 15px;
    cursor: pointer;
  }

  .profile-dropdown {
    position: relative;
    display: inline-block;
  }
  .profile {
    position: relative;
    cursor: pointer;
  }
  .profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .status-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: #4CAF50;
    border: 2px solid white;
    border-radius: 50%;
  }
  .dropdown-content {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  </style>