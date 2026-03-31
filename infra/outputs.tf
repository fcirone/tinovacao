output "cloudfront_url" {
  description = "Public URL of the CloudFront distribution"
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "s3_bucket_name" {
  description = "S3 bucket where site assets are uploaded"
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "Used to invalidate the CloudFront cache after a deploy"
  value       = aws_cloudfront_distribution.site.id
}
