import courses from '@/components/courses/coursesData';
import { recentBlogs } from '@/components/blogs/blogsData';

export default function sitemap() {
    const baseUrl = 'https://jobzenter.in';

    // Static routes
    const routes = [
        '',
        '/courses',
        '/aboutus',
        '/blogs',
        '/reach-us',
        '/career-lab/placement-preparation',
        '/career-lab/interview-preparation',
        '/career-lab/resume-building',
        '/career-lab/mock-interviews',
        '/placement',
        '/privacy-policy',
        '/terms-conditions',
        '/disclaimer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Course routes
    const courseRoutes = courses.map((course) => ({
        url: `${baseUrl}/courses/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Blog routes
    const blogRoutes = recentBlogs.map((blog) => ({
        url: `${baseUrl}${blog.link}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [...routes, ...courseRoutes, ...blogRoutes];
}
