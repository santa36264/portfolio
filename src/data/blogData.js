export const blogPosts = [
  {
    id: 1,
    slug: "building-scalable-vue-applications",
    title: "Building Scalable Vue.js Applications: Best Practices and Architecture Patterns",
    excerpt: "Learn how to structure Vue.js applications for scalability, maintainability, and performance. Discover architectural patterns and best practices used in production applications.",
    content: `
# Building Scalable Vue.js Applications: Best Practices and Architecture Patterns

As Vue.js continues to gain popularity in the frontend development world, building scalable applications has become a crucial skill. In this comprehensive guide, I'll share the architectural patterns and best practices I've learned from building production Vue.js applications.

## 1. Project Structure and Organization

### Feature-Based Structure
Instead of organizing files by type (components, views, services), organize them by feature:

\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   ├── stores/
│   │   └── views/
│   ├── dashboard/
│   └── projects/
├── shared/
│   ├── components/
│   ├── composables/
│   └── utils/
└── core/
    ├── router/
    ├── stores/
    └── services/
\`\`\`

### Benefits:
- Better code locality
- Easier feature development and maintenance
- Clear boundaries between different parts of the application

## 2. State Management with Pinia

For large applications, proper state management is crucial. Pinia offers several advantages:

\`\`\`javascript
// stores/user.js
export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
    permissions: [],
    preferences: {}
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.currentUser,
    hasPermission: (state) => (permission) => 
      state.permissions.includes(permission)
  },
  
  actions: {
    async fetchUser() {
      try {
        this.currentUser = await userService.getCurrentUser()
        this.permissions = await userService.getPermissions()
      } catch (error) {
        console.error('Failed to fetch user:', error)
      }
    }
  }
})
\`\`\`

## 3. Component Composition with Composables

Composables are the Vue 3 way to extract and reuse stateful logic:

\`\`\`javascript
// composables/useApi.js
export function useApi(url, options = {}) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const execute = async () => {
    try {
      loading.value = true
      error.value = null
      data.value = await fetch(url, options).then(res => res.json())
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, execute }
}
\`\`\`

## 4. Performance Optimization Techniques

### Lazy Loading and Code Splitting
Implement route-level code splitting:

\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue')
  }
]
\`\`\`

### Virtual Scrolling for Large Lists
Use libraries like vue-virtual-scroller for handling large datasets.

## 5. Testing Strategy

A comprehensive testing approach includes:
- Unit tests for composables and utilities
- Component tests for UI logic
- Integration tests for user workflows
- E2E tests for critical paths

## Conclusion

Building scalable Vue.js applications requires careful planning and adherence to best practices. By implementing these patterns, you'll create maintainable, performant applications that can grow with your needs.
    `,
    author: "Semre Demssie",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readingTime: 8,
    category: "Frontend Development",
    tags: ["Vue.js", "Architecture", "Performance", "Best Practices"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    slug: "django-rest-api-best-practices",
    title: "Django REST API Development: Security, Performance, and Best Practices",
    excerpt: "Master Django REST Framework with advanced techniques for building secure, high-performance APIs. Learn authentication, serialization, caching, and deployment strategies.",
    content: `
# Django REST API Development: Security, Performance, and Best Practices

Django REST Framework (DRF) is a powerful toolkit for building web APIs. In this comprehensive guide, I'll share advanced techniques for creating robust, secure, and high-performance APIs.

## 1. Authentication and Security

### JWT Token Authentication
Implement secure JWT authentication:

\`\`\`python
# settings.py
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
}

# views.py
class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            # Add custom claims or logging
            pass
        return response
\`\`\`

### Permission Classes
Create custom permission classes for fine-grained access control:

\`\`\`python
class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user
\`\`\`

## 2. Serializer Optimization

### Dynamic Field Selection
Allow clients to specify which fields they need:

\`\`\`python
class DynamicFieldsMixin:
    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', None)
        super().__init__(*args, **kwargs)
        
        if fields is not None:
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)

class UserSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'profile']
\`\`\`

## 3. Database Optimization

### Query Optimization with Select Related
Prevent N+1 queries:

\`\`\`python
class PostViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return Post.objects.select_related('author').prefetch_related('tags')
\`\`\`

### Database Indexing
Add strategic indexes for frequently queried fields:

\`\`\`python
class Post(models.Model):
    title = models.CharField(max_length=200, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
\`\`\`

## 4. Caching Strategies

### Redis Caching
Implement strategic caching:

\`\`\`python
from django.core.cache import cache

class PostViewSet(viewsets.ModelViewSet):
    def list(self, request):
        cache_key = f"posts_page_{request.GET.get('page', 1)}"
        cached_data = cache.get(cache_key)
        
        if cached_data:
            return Response(cached_data)
        
        response = super().list(request)
        cache.set(cache_key, response.data, timeout=300)
        return response
\`\`\`

## 5. Error Handling and Logging

### Custom Exception Handler
Implement consistent error responses:

\`\`\`python
def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    
    if response is not None:
        custom_response_data = {
            'error': {
                'status_code': response.status_code,
                'message': response.data,
                'timestamp': timezone.now().isoformat()
            }
        }
        response.data = custom_response_data
    
    return response
\`\`\`

## 6. API Versioning

### URL Path Versioning
Implement proper API versioning:

\`\`\`python
# urls.py
urlpatterns = [
    path('api/v1/', include('myapp.urls.v1')),
    path('api/v2/', include('myapp.urls.v2')),
]

# serializers.py
class UserSerializerV2(UserSerializer):
    full_name = serializers.SerializerMethodField()
    
    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
\`\`\`

## Conclusion

Building production-ready Django REST APIs requires attention to security, performance, and maintainability. These practices will help you create robust APIs that can handle real-world demands.
    `,
    author: "Semre Demssie",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-10",
    readingTime: 12,
    category: "Backend Development",
    tags: ["Django", "REST API", "Security", "Performance"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    views: 890,
    likes: 67
  },
  {
    id: 3,
    slug: "flutter-state-management-guide",
    title: "Flutter State Management: From Provider to Riverpod and Beyond",
    excerpt: "A comprehensive comparison of Flutter state management solutions. Learn when to use Provider, Bloc, Riverpod, and other state management approaches in your Flutter apps.",
    content: `
# Flutter State Management: From Provider to Riverpod and Beyond

State management is one of the most crucial aspects of Flutter development. In this comprehensive guide, I'll compare different approaches and help you choose the right solution for your project.

## 1. Provider Pattern

Provider is the most straightforward state management solution:

\`\`\`dart
class CounterProvider extends ChangeNotifier {
  int _count = 0;
  
  int get count => _count;
  
  void increment() {
    _count++;
    notifyListeners();
  }
}

// Usage in widget
Consumer<CounterProvider>(
  builder: (context, counter, child) {
    return Text('Count: \${counter.count}');
  },
)
\`\`\`

### Pros:
- Simple to understand and implement
- Great for small to medium apps
- Minimal boilerplate

### Cons:
- Can become complex in large apps
- Runtime exceptions possible
- Limited compile-time safety

## 2. BLoC Pattern

BLoC provides a more structured approach:

\`\`\`dart
abstract class CounterEvent {}
class Increment extends CounterEvent {}
class Decrement extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<Increment>((event, emit) => emit(state + 1));
    on<Decrement>((event, emit) => emit(state - 1));
  }
}

// Usage
BlocBuilder<CounterBloc, int>(
  builder: (context, state) {
    return Text('Count: \$state');
  },
)
\`\`\`

### Pros:
- Excellent separation of concerns
- Great for complex business logic
- Testable architecture

### Cons:
- Higher learning curve
- More boilerplate code
- Overkill for simple apps

## 3. Riverpod - The Modern Choice

Riverpod addresses many limitations of Provider:

\`\`\`dart
final counterProvider = StateNotifierProvider<CounterNotifier, int>((ref) {
  return CounterNotifier();
});

class CounterNotifier extends StateNotifier<int> {
  CounterNotifier() : super(0);
  
  void increment() => state++;
  void decrement() => state--;
}

// Usage
Consumer(
  builder: (context, ref, child) {
    final count = ref.watch(counterProvider);
    return Text('Count: \$count');
  },
)
\`\`\`

### Pros:
- Compile-time safety
- No BuildContext dependency
- Excellent testing support
- Powerful provider composition

## 4. Choosing the Right Solution

### For Simple Apps (< 10 screens):
- **Provider** or **setState**

### For Medium Apps (10-50 screens):
- **Riverpod** or **Provider**

### For Complex Apps (50+ screens):
- **Riverpod** or **BLoC**

### For Enterprise Apps:
- **BLoC** with Clean Architecture

## 5. Advanced Patterns

### Repository Pattern with Riverpod
\`\`\`dart
final userRepositoryProvider = Provider<UserRepository>((ref) {
  return UserRepository(ref.read(httpClientProvider));
});

final currentUserProvider = FutureProvider<User>((ref) {
  final repository = ref.read(userRepositoryProvider);
  return repository.getCurrentUser();
});
\`\`\`

## Conclusion

The choice of state management depends on your app's complexity, team expertise, and specific requirements. Riverpod has emerged as the modern choice for most Flutter applications due to its safety and flexibility.
    `,
    author: "Semre Demssie",
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-05",
    readingTime: 10,
    category: "Mobile Development",
    tags: ["Flutter", "State Management", "Riverpod", "Provider", "BLoC"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    views: 654,
    likes: 45
  },
  {
    id: 4,
    slug: "modern-css-techniques-2024",
    title: "Modern CSS Techniques Every Developer Should Know in 2024",
    excerpt: "Explore cutting-edge CSS features and techniques that will revolutionize your frontend development. From container queries to CSS layers and modern layout methods.",
    content: `
# Modern CSS Techniques Every Developer Should Know in 2024

CSS has evolved dramatically in recent years. Let's explore the modern features that are changing how we build user interfaces.

## 1. Container Queries

Container queries allow styles to respond to the size of a container, not just the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 300px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}

@container card (max-width: 299px) {
  .card {
    display: block;
  }
}
\`\`\`

## 2. CSS Grid Subgrid

Subgrid allows nested grids to participate in their parent's grid:

\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.child-grid {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}
\`\`\`

## 3. CSS Cascade Layers

Organize your CSS with explicit layering:

\`\`\`css
@layer reset, base, components, utilities;

@layer reset {
  * {
    box-sizing: border-box;
  }
}

@layer components {
  .button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
}

@layer utilities {
  .hidden {
    display: none !important;
  }
}
\`\`\`

## 4. Modern Color Functions

Use the new color functions for better color management:

\`\`\`css
.element {
  /* Using oklch for perceptual uniformity */
  background-color: oklch(0.7 0.15 180);
  
  /* Color mixing */
  border-color: color-mix(in srgb, blue 30%, red);
  
  /* Relative colors */
  color: hsl(from blue h s calc(l + 20%));
}
\`\`\`

## 5. CSS Nesting

Write more maintainable CSS with native nesting:

\`\`\`css
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  .title {
    font-size: 1.25rem;
    font-weight: bold;
    
    &::after {
      content: '';
      display: block;
      width: 2rem;
      height: 2px;
      background: currentColor;
    }
  }
}
\`\`\`

## 6. Scroll-Driven Animations

Create animations based on scroll position:

\`\`\`css
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-animation {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
\`\`\`

## 7. CSS :has() Selector

The "parent selector" that changes everything:

\`\`\`css
/* Style form when it has invalid inputs */
form:has(input:invalid) {
  border: 2px solid red;
}

/* Style card when it contains an image */
.card:has(img) {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* Style list items that don't have links */
li:not(:has(a)) {
  color: #666;
}
\`\`\`

## 8. View Transitions

Smooth transitions between pages:

\`\`\`css
::view-transition-old(root) {
  animation: slide-out 0.3s ease-in;
}

::view-transition-new(root) {
  animation: slide-in 0.3s ease-out;
}

@keyframes slide-out {
  to { transform: translateX(-100%); }
}

@keyframes slide-in {
  from { transform: translateX(100%); }
}
\`\`\`

## Conclusion

These modern CSS features provide powerful tools for creating more responsive, maintainable, and performant user interfaces. Start incorporating them into your projects to stay ahead of the curve.
    `,
    author: "Semre Demssie",
    publishedAt: "2023-12-28",
    updatedAt: "2023-12-28",
    readingTime: 7,
    category: "Frontend Development",
    tags: ["CSS", "Modern CSS", "Web Development", "Frontend"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    views: 432,
    likes: 31
  },
  {
    id: 5,
    slug: "microservices-with-docker-kubernetes",
    title: "Building Microservices with Docker and Kubernetes: A Production Guide",
    excerpt: "Learn how to architect, deploy, and manage microservices using Docker containers and Kubernetes orchestration. Real-world examples and best practices included.",
    content: `
# Building Microservices with Docker and Kubernetes: A Production Guide

Microservices architecture has become the standard for scalable applications. Let's explore how to implement it effectively using Docker and Kubernetes.

## 1. Microservices Architecture Principles

### Single Responsibility
Each service should have one clear purpose:

\`\`\`yaml
# user-service/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Database per Service
Each microservice should own its data:

\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  user-service:
    build: ./user-service
    environment:
      - DB_HOST=user-db
    depends_on:
      - user-db
      
  user-db:
    image: postgres:15
    environment:
      - POSTGRES_DB=users
      - POSTGRES_USER=userservice
      - POSTGRES_PASSWORD=secret
\`\`\`

## 2. Service Communication Patterns

### Synchronous Communication (REST APIs)
\`\`\`javascript
// API Gateway pattern
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Route to user service
app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3000',
  changeOrigin: true
}));

// Route to order service
app.use('/api/orders', createProxyMiddleware({
  target: 'http://order-service:3000',
  changeOrigin: true
}));
\`\`\`

### Asynchronous Communication (Message Queues)
\`\`\`javascript
// Event-driven architecture with RabbitMQ
const amqp = require('amqplib');

async function publishEvent(event, data) {
  const connection = await amqp.connect('amqp://rabbitmq:5672');
  const channel = await connection.createChannel();
  
  await channel.assertExchange('events', 'topic');
  channel.publish('events', event, Buffer.from(JSON.stringify(data)));
  
  await channel.close();
  await connection.close();
}
\`\`\`

## 3. Kubernetes Deployment

### Service Deployment
\`\`\`yaml
# user-service-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: your-registry/user-service:v1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: DB_HOST
          value: "user-db-service"
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: password
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP
\`\`\`

### ConfigMaps and Secrets
\`\`\`yaml
# config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  NODE_ENV: production
  LOG_LEVEL: info
---
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  password: cGFzc3dvcmQxMjM= # base64 encoded
\`\`\`

## 4. Service Mesh with Istio

### Traffic Management
\`\`\`yaml
# virtual-service.yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: user-service
spec:
  hosts:
  - user-service
  http:
  - match:
    - headers:
        version:
          exact: v2
    route:
    - destination:
        host: user-service
        subset: v2
  - route:
    - destination:
        host: user-service
        subset: v1
\`\`\`

## 5. Observability and Monitoring

### Distributed Tracing
\`\`\`javascript
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'user-service',
    [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
  }),
});

sdk.start();
\`\`\`

### Health Checks
\`\`\`javascript
app.get('/health', async (req, res) => {
  try {
    // Check database connection
    await db.ping();
    
    // Check external dependencies
    await checkExternalServices();
    
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
  } catch (error) {
    res.status(503).json({ status: 'unhealthy', error: error.message });
  }
});
\`\`\`

## 6. CI/CD Pipeline

### GitOps with ArgoCD
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Kubernetes
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Build and push Docker image
      run: |
        docker build -t $REGISTRY/user-service:$GITHUB_SHA .
        docker push $REGISTRY/user-service:$GITHUB_SHA
    
    - name: Update Kubernetes manifests
      run: |
        sed -i "s|image: .*|image: $REGISTRY/user-service:$GITHUB_SHA|" k8s/deployment.yaml
        git commit -am "Update image to $GITHUB_SHA"
        git push
\`\`\`

## Conclusion

Building production-ready microservices requires careful consideration of architecture, deployment, and operational concerns. Docker and Kubernetes provide the foundation, but success depends on implementing proper patterns for communication, observability, and continuous delivery.
    `,
    author: "Semre Demssie",
    publishedAt: "2023-12-20",
    updatedAt: "2023-12-20",
    readingTime: 15,
    category: "DevOps",
    tags: ["Microservices", "Docker", "Kubernetes", "DevOps", "Architecture"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false,
    views: 298,
    likes: 23
  }
]

export const blogCategories = [
  { name: "All", count: blogPosts.length },
  { name: "Frontend Development", count: blogPosts.filter(p => p.category === "Frontend Development").length },
  { name: "Backend Development", count: blogPosts.filter(p => p.category === "Backend Development").length },
  { name: "Mobile Development", count: blogPosts.filter(p => p.category === "Mobile Development").length },
  { name: "DevOps", count: blogPosts.filter(p => p.category === "DevOps").length }
]

export const popularTags = [
  "Vue.js", "React", "Django", "Flutter", "JavaScript", "Python", 
  "Node.js", "CSS", "Performance", "Architecture", "Security", 
  "Docker", "Kubernetes", "Best Practices"
]