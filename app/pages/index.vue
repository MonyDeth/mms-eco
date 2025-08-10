<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
    <h1 class="text-4xl font-bold mb-12">Welcome</h1>
    <div class="flex space-x-8">
      <router-link to="/plate" class="landing-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <!-- plate icon: a simplified license plate -->
          <rect x="3" y="8" width="18" height="8" rx="2" ry="2" stroke-width="2" />
          <line x1="3" y1="8" x2="21" y2="8" stroke-width="2" />
          <line x1="3" y1="16" x2="21" y2="16" stroke-width="2" />
        </svg>
        <span>Plate</span>
      </router-link>

      <router-link to="/card" class="landing-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <!-- card icon: simple card shape -->
          <rect x="3" y="6" width="18" height="12" rx="2" ry="2" stroke-width="2" />
          <line x1="3" y1="10" x2="21" y2="10" stroke-width="2" />
        </svg>
        <span>Card</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
.landing-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  text-decoration: none;
  color: #333;
  width: 120px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.landing-btn:hover {
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.15);
  transform: translateY(-4px);
}
.icon {
  width: 48px;
  height: 48px;
  stroke: #4A90E2;
  margin-bottom: 0.75rem;
}
span {
  font-weight: 600;
  font-size: 1.125rem;
}
</style>
