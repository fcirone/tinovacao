variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Used to name resources"
  type        = string
  default     = "fabiocirone-portfolio"
}

variable "domain_name" {
  description = "Custom domain (e.g. fabiocirone.com). Leave empty to use the CloudFront URL."
  type        = string
  default     = ""
}
