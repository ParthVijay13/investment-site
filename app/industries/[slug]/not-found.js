import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-6">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Industry Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The industry page you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/#industries">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Industries
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full">
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            Popular Industries:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              href="/industries/fintech" 
              className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-accent transition-colors"
            >
              Fintech
            </Link>
            <Link 
              href="/industries/healthcare" 
              className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-accent transition-colors"
            >
              Healthcare
            </Link>
            <Link 
              href="/industries/telecom" 
              className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-accent transition-colors"
            >
              Telecom
            </Link>
            <Link 
              href="/industries/cybersecurity" 
              className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-accent transition-colors"
            >
              Cybersecurity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
